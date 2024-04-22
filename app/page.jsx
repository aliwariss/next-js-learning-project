import Feed from "@components/Feed";
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">discover & share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered prompts</span>
            </h1>
            <p className="desc text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis vel nisi totam, illum dolore unde laborum, sequi, at facere ipsa accusantium! Error, debitis? Modi blanditiis quod laborum veritatis hic.
            </p>
            <Feed />
        </section>
    );
};

export default Home;