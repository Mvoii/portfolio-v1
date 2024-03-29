import Container from "@/components/ui/Container";
import { satoshiBlack, satoshiBold } from "@/components/utils/fonts";

const Overview = () => {
    return (
        <section className="relative">
            <Container className="flaex flex-col items-center justify-center h-[70vh] overflow-x-hidden">
                <article className="w-full max-w-2xl">
                    <p className={`${satoshiBlack.className} tracking-widest text-9xk flex justify-between`}>
                        {String("hello world").split("").map((letter, index) => (
                            <span key={index} className="stroked">
                                {letter}
                            </span>
                        ))}
                    </p>
                </article>
                <article className="flex flex-col gap-2 max-w-[600px] md:gap-1">
                    <h1 className={`${satoshiBlack.className} font-bold text-secondary text-clamp`}>
                            Hi, I&rsquo;m Frank.
                    </h1>
                    <p className={`${satoshiBold.className} tracking-wide text-[1.2rem] md:text-2xl`}>
                        &#60;Fullstack Developer &#x2f;&#62;
                    </p>
                    <p className="text-[0.875rem] leading-6 text-secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium non fuga ipsum obcaecati? Blanditiis, illo. Aspernatur libero quia fuga? Illo delectus aliquid, dolor consequatur itaque veniam? Exercitationem perspiciatis a similique!
                    </p>
                </article>
            </Container>
        </section>
    );
};

export default Overview;
