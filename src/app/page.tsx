import { cookies } from "next/headers";
import { Main } from "@/widgets/layout/Main";
import { HomeView } from "@/views/home/HomeView";

export default async function Page() {
    await cookies();

    return (
        <Main id="home">
            <HomeView />
        </Main>
    );
}
