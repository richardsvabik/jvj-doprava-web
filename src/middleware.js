import { serverGetter } from "./pageGetter"

let pages = []

export async function onRequest({ locals, params, redirect }, next) {
    let page = undefined
    if (params.real_path) {
        page = pages.find(p => p.real_path.replace(/^\/|\/$/g, '') === params.path)
    }
    if (!page) {
        page = pages.find(p => p.path === params.path)
    }

    if (!page) {
        pages = await serverGetter()
        page = pages.find(p => {
            return p.real_path.replace(/^\/|\/$/g, '') === params.path
        })
        if (!page) {
            page = pages.find(p => p.path === params.path)
        }
        if (!page) {
            return redirect('/')
        }
    }
    locals.page = page
    return next()
}
