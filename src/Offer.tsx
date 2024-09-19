import {ReactNode, useEffect} from "react";
import clsx from "clsx";
import {Comments} from "./types.ts";
import {Comment} from "./Comment.tsx";
import {useSearchParams} from "react-router-dom";


const LinkWithComment = ({children, isActive, onSelectedComment}: {
    children: ReactNode,
    isActive?: boolean,
    onSelectedComment: () => void
}) => {
    return (
        <button onClick={onSelectedComment} className={clsx(
            " decoration-2 decoration-blue-400 font-semibold",
            'relative inline-block cursor-pointer underline bg-transparent text-left', // Use `inline-block` for multi-line and positioning support
            {"before:bg-transparent": !isActive}, // Hide the pseudo-element when not active
            'before:transition-all  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-[1.03] before:bg-gray-700 before:rounded before:z-[-1]', // Pseudo-element with full background
        )}>
            <span className="flex items-center w-full">
                {children}
                {` 💬`}
            </span>
        </button>
    )
}


export const Offer = () => {
    const [currentCommentSearch, setCurrentCommentSearch] = useSearchParams();

    useEffect(() => {
        if(currentCommentSearch.get('comment') === null) {
            setCurrentCommentSearch({ comment: Comments.Intro });
        }
    }, [currentCommentSearch, setCurrentCommentSearch]);

    const currentComment = currentCommentSearch.get('comment') as Comments ?? null;

    const setCurrentComment = (comment: Comments | null) => {
        if(comment === null) {
            setCurrentCommentSearch();
            return
        }
        setCurrentCommentSearch({ comment });
    }
    return (
        <div className="flex gap-8 w-full flex-col lg:flex-row">
            <div
                className="w-full prose dark:prose-invert prose-sm prose-stone !max-w-none text-white prose-amber text-left">
                <h1 className="">Lead Frontend Engineer @ ChurchDesk 🚀</h1>
                <h2 className="text-blue-500">Hi ChurchDesk team!</h2>
                    <div className="leading-tight">
                        <strong>Why did I apply?</strong>
                        <p>I send applications only to carefully selected offers, and this one aligns closely with what
                            I’m looking for. I’m particularly interested in the mission of providing IT solutions for
                            parishes—something I’ve thought about before. It’s a business domain (I think) I understand and
                            identify with. </p>  <p>
                        Additionally, the opportunity for greater responsibility, both for the team
                        and the product, is a natural and necessary direction for my development. The offer's
                        conditions (including the Scandinavian work culture) are additional factors that appeal to
                        me. At this stage in my career, I’m focusing on long-term relationships.
                    </p>
                        <p>
                            Check out my comments to each section of the offer - I hope they will help you get to know me better!
                        </p>
                    </div>
                <div>
                    <div className="w-full border-2 border-[var(--tw-prose-quote-borders)]" />
                <div>
                    <div>
                        <h4>
                            What you will do
                        </h4>
                        <p dir="ltr">
                            <span>As a Lead Frontend Engineer, you will be a hands-on leader responsible for driving
                            the development of our user-facing applications. <LinkWithComment
                                    isActive={currentComment === Comments.General}
                                    onSelectedComment={() => setCurrentComment(Comments.General)}>In this role, you will be instrumental in
                            shaping our frontend architecture, establishing best practices, and guiding a team of
                                    talented engineers.</LinkWithComment> <LinkWithComment
                                    isActive={currentComment === Comments.Tooling}
                                    onSelectedComment={() => setCurrentComment(Comments.Tooling)}>You will utilize modern tools and frameworks such as React, TypeScript,
                            and TanStack Query to create dynamic, scalable user interfaces that enhance the user
                            experience.</LinkWithComment></span></p>
                        <p dir="ltr">In addition you will also play a critical role as an active sparring partner for
                            both the product team and the CTO, to shape the future of our product. <LinkWithComment
                                isActive={currentComment === Comments.Streams}
                                onSelectedComment={() => setCurrentComment(Comments.Streams)}>Additionally, you
                                will lead multiple development projects, ensuring successful delivery by coordinating
                                work
                                streams and securing timely releases.</LinkWithComment></p>
                        <h4>Working at ChurchDesk</h4>
                        <p dir="ltr"><LinkWithComment
                            isActive={currentComment === Comments.Churches}
                            onSelectedComment={() => setCurrentComment(Comments.Churches)}>Our mission is to help
                            churches modernize and stay connected with their communities
                            in a rapidly changing world.</LinkWithComment>
                        </p>
                    </div>
                </div>
                <h3 className="sc-1npqnwg-4 sc-1npqnwg-5 sc-1uwf3m5-0 sc-1uwf3m5-1 iErCYo custom-css-style-job-requirements">Job
                    requirements</h3>
                <div className="sc-1fwbcuw-0 hNnbKZ">
                    <div>
                        <ul>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.Experience}
                                onSelectedComment={() => setCurrentComment(Comments.Experience)}>6+ years of experience
                                in software development and demonstrated
                                successful end-to-end deliveries of new implementations</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.Components}
                                onSelectedComment={() => setCurrentComment(Comments.Components)}>Deep understanding of
                                modern frontend development practices,
                                including state management, component design, and performance
                                optimization.</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.Components}
                                onSelectedComment={() => setCurrentComment(Comments.Components)}>Proficiency in
                                TypeScript and experience with frontend tooling
                                like Webpack, Babel, and ESLint.</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.ReactNative}
                                onSelectedComment={() => setCurrentComment(Comments.ReactNative)}>Familiarity with React
                                Native is highly appreciated, as our
                                mobile apps and in-person donation terminals are built using it.</LinkWithComment></p>
                            </li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.Collaboartion}
                                onSelectedComment={() => setCurrentComment(Comments.Collaboartion)}>Strong ability to
                                collaborate with product managers, providing
                                technical insights to help shape and refine product features.</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.FullStack}
                                onSelectedComment={() => setCurrentComment(Comments.FullStack)}>Familiarity with backend
                                integration and RESTful APIs.</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.ResidenceInEU}
                                onSelectedComment={() => setCurrentComment(Comments.ResidenceInEU)}>Reside permanently
                                and currently somewhere in the EU. Alas, we're
                                not set up to hire outside of the EU since we believe that it's imperative that we meet
                                in person once in a while.</LinkWithComment></p></li>
                            <li dir="ltr"><p dir="ltr"><LinkWithComment
                                isActive={currentComment === Comments.Remote}
                                onSelectedComment={() => setCurrentComment(Comments.Remote)}>At least one year of remote
                                work experience is required if you
                                plan to work remotely.</LinkWithComment></p></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full bottom-8 sticky lg:relative">
                {currentComment && <Comment onClose={() => setCurrentComment(null)} currentComment={currentComment}/>}
            </div>
        </div>
    )
}