import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";

export const BlogId:NextPage<Blog> => ({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

type Blog = {
  title: string;
  publishedAt: string;
  body: string;
};

// 静的生成のためのパスを指定します
export const getStaticPaths:GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" }); // .get(id): idを取得し、promiseで返す

  // とりあえずanyにしたが、contentに入ってくる要素は何があるのか？を調べて全て定義する必要があるのでは？
  const paths = data.contents.map((content:any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps:GetStaticProps = async (context:any) => {
  console.log(context);
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
