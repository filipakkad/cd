import {Comments} from "./types.ts";
import img from "./assets/fa_photo.jpg";
import ReactMarkdown from "react-markdown";
import {Suspense, SVGProps, useEffect, useState} from "react";

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
        <Suspense fallback={<div>Loading...</div>}>
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

export const Comment = ({currentComment, onClose }: { currentComment: Comments, onClose: () => void }) => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        const filename = comments[currentComment]; // Get the file name from the comments object
        loadMarkdown(filename).then(setMarkdownContent).catch(console.error);
    }, [currentComment]);
    return (
        <div className="bg-gray-800 h-fit max-h-[calc(100svh-100px)] overflow-auto w-full rounded-lg border sticky top-12">
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
            <p className="prose prose-sm !max-w-none leading-tight prose-invert text-justify px-4 pb-4">
                <MarkdownRenderer markdown={markdownContent}/>
            </p>
        </div>
    )
}