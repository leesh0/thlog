export const Avatar = () => import('../../components/Avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => wrapFunctional(c.default || c))
export const Avatars = () => import('../../components/Avatars.vue' /* webpackChunkName: "components/avatars" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const CardActivity = () => import('../../components/card/Activity.vue' /* webpackChunkName: "components/card-activity" */).then(c => wrapFunctional(c.default || c))
export const CardFolder = () => import('../../components/card/Folder.vue' /* webpackChunkName: "components/card-folder" */).then(c => wrapFunctional(c.default || c))
export const CardProfile = () => import('../../components/card/Profile.vue' /* webpackChunkName: "components/card-profile" */).then(c => wrapFunctional(c.default || c))
export const CardThread = () => import('../../components/card/Thread.vue' /* webpackChunkName: "components/card-thread" */).then(c => wrapFunctional(c.default || c))
export const CardUser = () => import('../../components/card/User.vue' /* webpackChunkName: "components/card-user" */).then(c => wrapFunctional(c.default || c))
export const CardUserThread = () => import('../../components/card/UserThread.vue' /* webpackChunkName: "components/card-user-thread" */).then(c => wrapFunctional(c.default || c))
export const FormsInput = () => import('../../components/forms/Input.vue' /* webpackChunkName: "components/forms-input" */).then(c => wrapFunctional(c.default || c))
export const ModalFolder = () => import('../../components/modal/Folder.vue' /* webpackChunkName: "components/modal-folder" */).then(c => wrapFunctional(c.default || c))
export const ModalLogin = () => import('../../components/modal/Login.vue' /* webpackChunkName: "components/modal-login" */).then(c => wrapFunctional(c.default || c))
export const TagsThreadTopics = () => import('../../components/tags/ThreadTopics.vue' /* webpackChunkName: "components/tags-thread-topics" */).then(c => wrapFunctional(c.default || c))
export const TagsTopicBox = () => import('../../components/tags/TopicBox.vue' /* webpackChunkName: "components/tags-topic-box" */).then(c => wrapFunctional(c.default || c))
export const TagsTopicList = () => import('../../components/tags/TopicList.vue' /* webpackChunkName: "components/tags-topic-list" */).then(c => wrapFunctional(c.default || c))
export const TagsTopics = () => import('../../components/tags/Topics.vue' /* webpackChunkName: "components/tags-topics" */).then(c => wrapFunctional(c.default || c))
export const ThreadCommentWriter = () => import('../../components/thread/CommentWriter.vue' /* webpackChunkName: "components/thread-comment-writer" */).then(c => wrapFunctional(c.default || c))
export const ThreadMdView = () => import('../../components/thread/MdView.vue' /* webpackChunkName: "components/thread-md-view" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostList = () => import('../../components/thread/PostList.vue' /* webpackChunkName: "components/thread-post-list" */).then(c => wrapFunctional(c.default || c))
export const LayoutFooter = () => import('../../components/layout/Footer/index.vue' /* webpackChunkName: "components/layout-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavbarUser = () => import('../../components/layout/Navbar/User.vue' /* webpackChunkName: "components/layout-navbar-user" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavbar = () => import('../../components/layout/Navbar/index.vue' /* webpackChunkName: "components/layout-navbar" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostCommentMenu = () => import('../../components/thread/Post/CommentMenu.vue' /* webpackChunkName: "components/thread-post-comment-menu" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostComments = () => import('../../components/thread/Post/Comments.vue' /* webpackChunkName: "components/thread-post-comments" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostFoot = () => import('../../components/thread/Post/Foot.vue' /* webpackChunkName: "components/thread-post-foot" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostMenu = () => import('../../components/thread/Post/Menu.vue' /* webpackChunkName: "components/thread-post-menu" */).then(c => wrapFunctional(c.default || c))
export const ThreadPostReferences = () => import('../../components/thread/Post/References.vue' /* webpackChunkName: "components/thread-post-references" */).then(c => wrapFunctional(c.default || c))
export const ThreadPost = () => import('../../components/thread/Post/index.vue' /* webpackChunkName: "components/thread-post" */).then(c => wrapFunctional(c.default || c))
export const ThreadSide = () => import('../../components/thread/Side/index.vue' /* webpackChunkName: "components/thread-side" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavbarNotificationsCard = () => import('../../components/layout/Navbar/Notifications/Card.vue' /* webpackChunkName: "components/layout-navbar-notifications-card" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavbarNotifications = () => import('../../components/layout/Navbar/Notifications/index.vue' /* webpackChunkName: "components/layout-navbar-notifications" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
