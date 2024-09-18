import {Comments} from "./types.ts";
import img from "./assets/fa_photo.jpg";
import ReactMarkdown from "react-markdown";
import {Suspense, SVGProps, useEffect, useState} from "react";
import {useSpring , animated} from "react-spring";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"/>
        </svg>
    )
}


const comments: Record<Comments, string> = {
    [Comments.TEST]: "comment-1.md",
    [Comments.TEST2]: "comment-2.md",
    [Comments.Experience]: "comment-experience.md",
    [Comments.Components]: "comment-components.md",
    [Comments.ReactNative]: "comment-reactnative.md",
    [Comments.Collaboartion]: "comment-collaboration.md",
    [Comments.FullStack]: "comment-fullstack.md",
    [Comments.ResidenceInEU]: "comment-residenceineu.md",
    [Comments.Remote]: "comment-remote.md",
    [Comments.Streams]: "comment-streams.md",
    [Comments.Churches]: "comment-churches.md",
}

const MarkdownRenderer = ({markdown}: { markdown: string }) => {
    return (
        <Suspense fallback={(
            <div className="h-full flex items-center justify-center min-h-24">
                <div role="status">
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Suspense>
    )
}

const loadMarkdown = async (filename: string) => {
    const modules = import.meta.glob('./contents/*.md');
    const path = `./contents/${filename}`;
    if (modules[path]) {
        const markdownModule = await modules[path]();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return markdownModule.default; // Return the content of the markdown file
    }
    throw new Error(`Markdown file "${filename}" not found.`);
};

export const Comment = ({currentComment, onClose}: { currentComment: Comments, onClose: () => void }) => {
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [props] = useSpring(
        () => ({
            from: { opacity: 0, y: 1.4 },
            to: { opacity: 1, y: 0 },
        }),
        []
    )
    useEffect(() => {
        const filename = comments[currentComment]; // Get the file name from the comments object
        loadMarkdown(filename).then(setMarkdownContent).catch(console.error);
    }, [currentComment]);
    return (
        <animated.div
            style={props}
            className="bg-gray-800 h-fit max-h-[calc(100svh-100px)] overflow-auto w-full rounded-lg border sticky top-12">
            <div className="flex gap-2 justify-between items-center sticky top-0 bg-gray-800 p-4">
                <div className="flex gap-2">
                    <div className="flex h-full items-center">
                        <img src={img} alt="Filip Akkad Image" className="rounded-full object-cover h-12 w-12"/>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <span className="font-semibold whitespace-nowrap">Filip Akkad</span>
                        <span className="text-xs font-light">Sep 18, 2024</span>
                    </div>
                </div>
                <div>
                    <button className="rounded-full h-6 w-6 bg-gray-500" onClick={onClose}>
                        <CloseIcon className="stroke-white fill-white h-full w-full" />
                    </button>
                </div>
            </div>
            <div className="border-t my-2 border-gray-50/50 px-4"/>
            <p className="prose prose-sm prose-code:border-red-400 prose-code:before:hidden prose-code:after:hidden prose-code:bg-gray-600 prose-code:p-0.5 prose-code:rounded !max-w-none leading-tight prose-invert text-justify px-4 pb-4">
                <MarkdownRenderer markdown={markdownContent}/>
            </p>
        </animated.div>
    )
}