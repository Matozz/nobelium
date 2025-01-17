import Image from "next/image";
import Container from "../components/Container";
import dynamic from "next/dynamic";
import TagItem from "../components/TagItem";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import BLOG from "../blog.config";
import formatDate from "../lib/formatDate";
import { useLocale } from "../lib/locale";
import { useRouter } from "next/router";
import Comments from "../components/Comments";
import { useEffect, useRef, useState } from "react";

const BackTopBtn = dynamic(() => import("../components/BackTopBtn"), {
  ssr: false,
});

const mapPageUrl = (id) => {
  return "https://www.notion.so/" + id.replace(/-/g, "");
};

const Layout = ({
  children,
  blockMap,
  frontMatter,
  emailHash,
  fullWidth = false,
}) => {
  const locale = useLocale();
  const router = useRouter();
  const [{ links, minLevel }, setLinks] = useState({ links: [], minLevel: 1 });
  const articleRef = useRef();

  useEffect(() => {
    const links = document.querySelectorAll(".notion-h");
    const linksArr = Array.from(links).map(
      ({ dataset, outerText, localName }) => ({
        id: dataset.id,
        title: outerText,
        level: localName.substring(1),
      })
    );
    const level =
      [...linksArr].sort((a, b) => a.level - b.level)[0]?.level ?? 2;
    setLinks({ links: linksArr, minLevel: level });
  }, []);

  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      toc={
        frontMatter.slug !== "about"
          ? {
              links: links,
              minLevel: minLevel,
            }
          : {}
      }
      fullWidth={fullWidth}
    >
      <article ref={articleRef}>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          <span className="mr-2">{frontMatter.title}</span>
          {frontMatter.lang && (
            <span className="inline-block translate-y-[-0.1rem] px-1 align-middle rounded text-gray-500 text-sm font-normal w-fit border dark:border-gray-600 dark:text-gray-400">
              {frontMatter.lang}
            </span>
          )}
        </h1>
        {frontMatter.type[0] !== "Page" && (
          <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
            <div className="flex mb-4">
              <a href={BLOG.socialLink || "#"} className="flex">
                <Image
                  alt={BLOG.author}
                  width={24}
                  height={24}
                  src={"https://avatars.githubusercontent.com/u/56786508"}
                  className="rounded-full"
                />
                <p className="ml-2 md:block">{BLOG.author}</p>
              </a>
              <span className="block">&nbsp;/&nbsp;</span>
            </div>
            <div className="mr-2  md:ml-0">
              {formatDate(
                frontMatter?.date?.start_date || frontMatter.createdTime,
                BLOG.lang
              )}
            </div>
            {frontMatter.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                {frontMatter.tags.map((tag) => (
                  <TagItem key={tag} tag={tag} />
                ))}
              </div>
            )}
          </nav>
        )}
        {children}
        {blockMap && (
          <div className="-mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                Equation,
                Code,
                Collection,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
      </article>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <a>
          <button
            onClick={() => router.push(BLOG.path || "/")}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ← {locale.POST.BACK}
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ↑ {locale.POST.TOP}
          </button>
        </a>
      </div>
      <BackTopBtn />

      <Comments frontMatter={frontMatter} />
    </Container>
  );
};

export default Layout;
