import { cookies } from "next/headers";
import { createPageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { Main } from "@/widgets/layout/Main";
import { HomeView } from "@/views/home/HomeView";

export const metadata = createPageMetadata({
    description: SITE_DESCRIPTION,
    path: "/",
    keywords: ["fivepixels", "QA", "DOM feedback", "React", "staging", "open source"],
});

export default async function Page() {
    await cookies();

    return (
        <Main id="home">
            <HomeView />
        </Main>
    );
}
