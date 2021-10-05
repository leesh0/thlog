export { default as Avatar } from '../../components/Avatar.vue'
export { default as Avatars } from '../../components/Avatars.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as CardActivity } from '../../components/card/Activity.vue'
export { default as CardFolder } from '../../components/card/Folder.vue'
export { default as CardProfile } from '../../components/card/Profile.vue'
export { default as CardThread } from '../../components/card/Thread.vue'
export { default as CardUser } from '../../components/card/User.vue'
export { default as CardUserThread } from '../../components/card/UserThread.vue'
export { default as ModalFolder } from '../../components/modal/Folder.vue'
export { default as ModalLogin } from '../../components/modal/Login.vue'
export { default as FormsInput } from '../../components/forms/Input.vue'
export { default as TagsThreadTopics } from '../../components/tags/ThreadTopics.vue'
export { default as TagsTopicBox } from '../../components/tags/TopicBox.vue'
export { default as TagsTopicList } from '../../components/tags/TopicList.vue'
export { default as TagsTopics } from '../../components/tags/Topics.vue'
export { default as ThreadCommentWriter } from '../../components/thread/CommentWriter.vue'
export { default as ThreadMdView } from '../../components/thread/MdView.vue'
export { default as ThreadPostList } from '../../components/thread/PostList.vue'
export { default as LayoutNavbarUser } from '../../components/layout/Navbar/User.vue'
export { default as LayoutNavbar } from '../../components/layout/Navbar/index.vue'
export { default as LayoutFooter } from '../../components/layout/Footer/index.vue'
export { default as ThreadPostCommentMenu } from '../../components/thread/Post/CommentMenu.vue'
export { default as ThreadPostComments } from '../../components/thread/Post/Comments.vue'
export { default as ThreadPostFoot } from '../../components/thread/Post/Foot.vue'
export { default as ThreadPostMenu } from '../../components/thread/Post/Menu.vue'
export { default as ThreadPostReferences } from '../../components/thread/Post/References.vue'
export { default as ThreadPost } from '../../components/thread/Post/index.vue'
export { default as ThreadSide } from '../../components/thread/Side/index.vue'
export { default as LayoutNavbarNotificationsCard } from '../../components/layout/Navbar/Notifications/Card.vue'
export { default as LayoutNavbarNotifications } from '../../components/layout/Navbar/Notifications/index.vue'

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
