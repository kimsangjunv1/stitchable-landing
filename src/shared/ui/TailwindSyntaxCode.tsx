type TokenType = "comment" | "tag" | "attr" | "string" | "punct" | "plain";

const TOKEN_CLASS: Record<TokenType, string> = {
    comment: "text-[#64748b]",
    tag: "text-[#ff642f]",
    attr: "text-[#c5ff4d]",
    string: "text-[#5dfbff]",
    punct: "text-[#94a3b8]",
    plain: "text-[#f8fafc]",
};

function pushToken(tokens: Array<{ type: TokenType; value: string }>, type: TokenType, value: string) {
    if (!value) return;
    const last = tokens.at(-1);
    if (last?.type === type) {
        last.value += value;
        return;
    }
    tokens.push({ type, value });
}

function tokenizeLine(line: string): Array<{ type: TokenType; value: string }> {
    if (/^\s*\/\//.test(line)) {
        return [{ type: "comment", value: line }];
    }

    const tokens: Array<{ type: TokenType; value: string }> = [];
    let index = 0;

    while (index < line.length) {
        const rest = line.slice(index);

        if (rest.startsWith("//")) {
            pushToken(tokens, "comment", rest);
            break;
        }

        const stringMatch = rest.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
        if (stringMatch) {
            pushToken(tokens, "string", stringMatch[0]);
            index += stringMatch[0].length;
            continue;
        }

        const braceMatch = rest.match(/^\{\{[^}]*\}\}/);
        if (braceMatch) {
            pushToken(tokens, "string", braceMatch[0]);
            index += braceMatch[0].length;
            continue;
        }

        const braceSingleMatch = rest.match(/^\{[^}]*\}/);
        if (braceSingleMatch) {
            pushToken(tokens, "string", braceSingleMatch[0]);
            index += braceSingleMatch[0].length;
            continue;
        }

        const tagMatch = rest.match(/^<\/?[A-Za-z][\w.-]*/);
        if (tagMatch) {
            pushToken(tokens, "tag", tagMatch[0]);
            index += tagMatch[0].length;
            continue;
        }

        const attrMatch = rest.match(/^([A-Za-z][\w-]*)(=)/);
        if (attrMatch) {
            pushToken(tokens, "attr", attrMatch[1]);
            pushToken(tokens, "punct", attrMatch[2]);
            index += attrMatch[0].length;
            continue;
        }

        const punctMatch = rest.match(/^[<>/={},.()]/);
        if (punctMatch) {
            pushToken(tokens, "punct", punctMatch[0]);
            index += 1;
            continue;
        }

        const wordMatch = rest.match(/^[A-Za-z@][\w.-]*/);
        if (wordMatch) {
            const word = wordMatch[0];
            const type = word === "npm" || word.startsWith("@") || word === "install" ? "attr" : "plain";
            pushToken(tokens, type, word);
            index += word.length;
            continue;
        }

        pushToken(tokens, "plain", rest[0] ?? "");
        index += 1;
    }

    return tokens;
}

function renderTokens(tokens: Array<{ type: TokenType; value: string }>) {
    return tokens.map((token, index) => (
        <span
            className={`${TOKEN_CLASS[token.type]} leading-[1.5]`}
            key={index}
        >
            {token.value}
        </span>
    ));
}

export function TailwindSyntaxCode({ code }: { code: string }) {
    const lines = code.replace(/\n$/, "").split("\n");

    return (
        <div className="overflow-x-auto rounded-[1.2rem] border border-white/10 bg-[#0f172a] p-[1.6rem] font-[family-name:var(--font-manrope)] text-[1.3rem] leading-[1.85] tablet:p-[2rem] tablet:text-[1.4rem]">
            <pre className="m-0">
                <code>
                    {lines.map((line, lineIndex) => (
                        <div
                            className="table w-full table-fixed"
                            key={lineIndex}
                        >
                            <span className="table-cell w-[2.8rem] select-none pr-[1.6rem] text-right align-top text-[#475569]">{lineIndex + 1}</span>
                            <span className="table-cell whitespace-pre-wrap break-words align-top">{renderTokens(tokenizeLine(line))}</span>
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
}
