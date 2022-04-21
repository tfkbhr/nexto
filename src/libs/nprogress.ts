import NProgress from 'nprogress'

export const startProgress = (url: URL) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}

export const stopProgress = () => {
  NProgress.done()
}
