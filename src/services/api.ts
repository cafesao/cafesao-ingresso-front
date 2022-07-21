interface IFunType {
  [choice: string]: Function
}

export type IType = 'get' | 'post' | 'put' | 'delete'

async function api(url: string, type: IType, data: any) {
  const funType: IFunType = {
    async get() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`)
        if (response.ok) {
          return await response.json()
        }
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async post() {
      try {
        const options: RequestInit = {
          method: 'POST',
          body: data,
        }
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/${url}`,
          options,
        )
        if (response.ok) {
          return await response.json()
        }
      } catch (error) {
        console.log(error)
        throw error
      }
    },
  }
  const result = await funType[type]()
  return result
}

export default api
