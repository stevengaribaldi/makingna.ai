import axios from 'axios'
interface Article {
  url: string;
  title: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
  author: string;
}

interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
  createdAt: string;
}
export const onGetBlogPosts = async () => {
  try {
    const postArray: Post[] = [];

    const apiKey = process.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=ai&sources=techcrunch&apiKey=${apiKey}`;
    if (!apiKey) return;
    const response = await axios.get(apiUrl);

    const articles: Article[] = response.data.articles
      .sort(
        (a: Article, b: Article) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
      .slice(0, 6);

    articles.forEach((article) => {
      const post: Post = {
        id: article.url,
        title: article.title,
        image: article.urlToImage,
        content: article.content,
        createdAt: new Date(article.publishedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      };
      postArray.push(post);
    });

    return postArray;
  } catch (error) {
    console.error(error);
  }
}
export const onGetBlogPost = async (id: any) => {
  try {
    const apiKey = process.env.NEWS_API_KEY
    const apiUrl = `https://newsapi.org/v2/everything?q=ai&sources=techcrunch&apiKey=${apiKey}`;
    if (!apiKey) return
    const response = await axios.get(apiUrl)

    const article = response.data.articles.find((article: { url: any; }) => article.url === id)
    if (article) {
      return {
        id: article.url,
        title: article.title,
        content: article.content,
        createdAt: new Date(article.publishedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
        author: article.author,
      };
    }
  } catch (error) {
    console.error(error)
  }
}

// 'use server'
// import axios from 'axios'

// export const onGetBlogPosts = async () => {
//   try {
//     const postArray: {
//       id: string
//       title: string
//       image: string
//       content: string
//       createdAt: Date
//     }[] = []
//     const postsUrl = process.env.CLOUDWAYS_POSTS_URL
//     if (!postsUrl) return
//     const posts = await axios.get(postsUrl)
//     const featuredImages = process.env.CLOUDWAYS_FEATURED_IMAGES_URL
//     if (!featuredImages) return

//     let i = 0
//     while (i < posts.data.length) {
//       const image = await axios.get(
//         `${featuredImages}${posts.data[i].featured_media}`
//       )
//       if (image) {
//         console.log(image.data.media_details)
//         const post: {
//           id: string
//           title: string
//           image: string
//           content: string
//           createdAt: Date
//         } = {
//           id: posts.data[i].id,
//           title: posts.data[i].title.rendered,
//           image: image.data.media_details.file,
//           content: posts.data[i].content.rendered,
//           createdAt: new Date(posts.data[i].date),
//         }
//         postArray.push(post)
//       }
//       i++
//     }

//     if (posts.data) {
//       return postArray
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const onGetBlogPost = async (id: string) => {
//   try {
//     const postUrl = process.env.CLOUDWAYS_POSTS_URL
//     if (!postUrl) return
//     const post = await axios.get(`${postUrl}/${id}`)
//     if (post.data) {
//       const authorUrl = process.env.CLOUDWAYS_USERS_URL
//       if (!authorUrl) return
//       const author = await axios.get(`${authorUrl}${post.data.author}`)
//       if (author.data) {
//         return {
//           id: post.data.id,
//           title: post.data.title.rendered,
//           content: post.data.content.rendered,
//           createdAt: new Date(post.data.date),
//           author: author.data.name,
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

