import {clsx} from "clsx";

function App() {

    const items = [
        {
            label: "simple landing",
            href: "https://simplelanding.app/",
            archived: false
        },
        {
            label: "sheets to dashboard",
            href: "https://www.sheetstodashboard.com/",
            archived: false
        },
        {
            label: "art portfolio",
            href: "https://alexkim.me/",
            archived: false
        },
        {
            label: "whiteboard",
            href: "https://alex-whiteboard.netlify.app/",
            archived: false
        },
        {
            label: "chummy",
            href: "https://www.chummy.atomiccode.io/",
            archived: true
        },
        {
            label: "g desktop suite",
            href: "https://github.com/alexkim205/G-Desktop-Suite",
            archived: true
        },
    ]

  return (
    <div className="w-screen flex flex-col items-start p-5">
        <div className="flex justify-between items-center mb-6 w-full">
            <h1 className="text-4xl font-bold">alex kim's dev portfolio</h1>
            <a href="https://github.com/alexkim205" target="_blank" className="text-3xl font-medium underline">github</a>
        </div>
        <ul className="ml-4 flex flex-col gap-2.5 text-3xl font-medium">
            {items.map(({label, href, archived}) => (
                <li key={label} className={clsx("hover:scale-105 underline origin-left", archived && "opacity-30")}>
                    <a href={href} target="_blank">{label}{archived ? " (archived)" : ""}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default App
