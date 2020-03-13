import storageHelper from '@/util/storageHelper'
const isDev = process.env.VUE_APP_MODE === 'dev'
const isUat = process.env.VUE_APP_MODE === 'uat' || isDev
let user = {}
if (process.env.VUE_APP_MODE === 'dev') {
  user = null
}

function getQuery (name) {
  let AllVars = window.location.search.substring(1)
  let Vars = AllVars.split('&')
  for (let i = 0; i < Vars.length; i++) {
    let Var = Vars[i].split('=')
    if (Var[0] == name) return Var[1]
  }
  return ''
}

export default {
  currUser: isDev ? user : null,
  hasLogin: isDev,
  refreshAppInfo (currUser) {
    this.currUser = currUser
    storageHelper.set('user', currUser)
  },
  isUat,
  isDev,
  getQuery,
}
