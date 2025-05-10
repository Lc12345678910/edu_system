import defaultSettings from '@/settings'

const title = defaultSettings.title || '竹苑教育教育系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
