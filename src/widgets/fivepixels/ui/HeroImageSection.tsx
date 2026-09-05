export function HeroImageSection() {
    return (
        <section className="relative w-full h-[calc(50svh-(8.0rem/2))] overflow-hidden border-b border-b-[var(--adaptive-border)]">
            <video
                autoPlay
                className="h-full min-h-[32rem] w-full object-cover"
                loop
                muted
                playsInline
                aria-hidden
            >
                <source
                    src="/colorflow-animation.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="absolute top-0 left-[50%] transform translate-x-[-50%] z-1 h-full w-full mx-auto h-[calc(50svh-(8.0rem/2))] w-full max-w-[var(--size-pc)] ">
                <img
                    src="/test_23.png"
                    alt="/"
                    className="h-full min-h-[32rem] w-full object-cover"
                />
            </div>
        </section>
    );
}
