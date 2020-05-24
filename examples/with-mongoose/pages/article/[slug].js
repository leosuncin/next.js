import Article from 'components/article'
import Comment from 'components/comment'
import Layout from 'components/layout'
import SideBar from 'components/sidebar'
import { connect } from 'libs/db'
import Category from 'models/category'

const ArticlePage = ({ article, categories }) => (
  <Layout categories={categories} title={article.title}>
    <main className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <Article article={article} />
          <div className="row">
            <div className="col-12">
              <h3 className="lead font-weight-bold mb-4">
                Comments ({article.comments.length})
              </h3>
              <hr />
              <ul className="list-unstyled">
                {article.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </main>
  </Layout>
)

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'featured-post' } },
      { params: { slug: 'post-title' } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  await connect()
  const categories = await Category.find()

  return {
    props: {
      categories: categories.map((category) => category.toJSON()),
      article: {
        id: 'f3ab77d6-b8a9-47f1-a954-76a877698d1b',
        slug: 'featured-post',
        title: 'Featured post',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna. Lacus sed turpis tincidunt id. Sit amet est placerat in egestas. Sit amet massa vitae tortor. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. At varius vel pharetra vel turpis nunc eget lorem dolor. Tortor id aliquet lectus proin nibh. Lacinia quis vel eros donec ac. Lobortis scelerisque fermentum dui faucibus in ornare quam. Quam nulla porttitor massa id neque aliquam. Egestas pretium aenean pharetra magna. Sed enim ut sem viverra aliquet eget. Morbi blandit cursus risus at. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Ultrices vitae auctor eu augue ut.

Nunc id cursus metus aliquam. Ac ut consequat semper viverra. Nec feugiat nisl pretium fusce id velit ut tortor. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Leo duis ut diam quam nulla porttitor massa id. Mi quis hendrerit dolor magna eget est lorem ipsum. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quisque egestas diam in arcu cursus euismod. Purus in massa tempor nec feugiat nisl pretium fusce. Lacinia at quis risus sed vulputate odio ut. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Fames ac turpis egestas sed tempus urna et. Id cursus metus aliquam eleifend mi in. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Cras adipiscing enim eu turpis egestas. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.

Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quam viverra orci sagittis eu volutpat odio facilisis. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Diam donec adipiscing tristique risus nec feugiat. Gravida in fermentum et sollicitudin ac. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tortor vitae purus faucibus ornare suspendisse sed nisi. Mauris nunc congue nisi vitae. Id diam vel quam elementum pulvinar etiam. Nibh nisl condimentum id venenatis a condimentum vitae. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Tristique nulla aliquet enim tortor at auctor urna nunc. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Tellus mauris a diam maecenas sed. Turpis massa tincidunt dui ut ornare.

Etiam erat velit scelerisque in dictum non. Sed libero enim sed faucibus turpis in eu mi bibendum. At erat pellentesque adipiscing commodo elit. Elementum sagittis vitae et leo duis ut diam. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Sit amet consectetur adipiscing elit pellentesque. Turpis massa sed elementum tempus egestas sed. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Neque viverra justo nec ultrices dui sapien. Libero nunc consequat interdum varius sit amet mattis. Suspendisse sed nisi lacus sed viverra tellus in. Elementum integer enim neque volutpat.

Ullamcorper sit amet risus nullam eget felis. Vitae turpis massa sed elementum tempus egestas sed. Dictum sit amet justo donec enim. Faucibus a pellentesque sit amet porttitor eget dolor. Facilisis mauris sit amet massa vitae tortor condimentum. Commodo odio aenean sed adipiscing diam donec. Etiam tempor orci eu lobortis. Eget aliquet nibh praesent tristique magna. Tincidunt arcu non sodales neque sodales ut etiam. Turpis massa sed elementum tempus egestas sed sed. Eu ultrices vitae auctor eu augue. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Amet cursus sit amet dictum. Gravida neque convallis a cras semper auctor.`,
        category: {
          id: 'e0edde4d-3a46-48e1-840d-23695fabbc08',
          name: 'World',
          slug: 'world',
        },
        comments: [
          {
            id: '7335025a-cda1-4dd0-b4d4-24a20119f7fa',
            nickname: 'Anonymous',
            body:
              'Nunc id cursus metus aliquam. Ac ut consequat semper viverra. Nec feugiat nisl pretium fusce id velit ut tortor. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Leo duis ut diam quam nulla porttitor massa id.',
          },
          {
            id: 'acf0d6db-c8c2-4176-ae7c-7ba7397b3cae',
            nickname: 'Anonymous',
            body:
              'Mi quis hendrerit dolor magna eget est lorem ipsum. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quisque egestas diam in arcu cursus euismod. Purus in massa tempor nec feugiat nisl pretium fusce. Lacinia at quis risus sed vulputate odio ut. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Fames ac turpis egestas sed tempus urna et.',
          },
          {
            id: 'c7f4ac4a-fc5f-440b-ba49-ff0c3abde9e6',
            nickname: 'Anonymous',
            body:
              'Id cursus metus aliquam eleifend mi in. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Cras adipiscing enim eu turpis egestas. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.',
          },
        ],
        createdAt: new Date(2019, 9, 12).toISOString(),
      },
    },
  }
}

export default ArticlePage
