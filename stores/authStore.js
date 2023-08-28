import { defineStore } from "pinia";
import { getToken, removeToken, setToken } from '@/utils/auth'
import {  getUserInfo, loginByWeb, logoutByWeb } from '@/api/login'


export const useAuthStore = defineStore("auth", {

  state: () => ({
    token: getToken(),
    user_info: {}, // complete user details
    page_refreshing: true,
  }),

  getters: {
    getLoginToken() {
      return this.token
    },
  },

  actions: {
	// Login
	Login(userCredInfo) {
		return new Promise((resolve, reject) => {
			// make login data set
			let data = {
				email: userCredInfo.email,
				phone: userCredInfo.phone,
				password: userCredInfo.password,
			}
			// Lets fire login with info
			loginByWeb(data).then(response => {
				if(response.status == 200) {
					let responseData = response.data
					let go = true
						if (go) {
							// SITE TOKEN
							this.token = responseData.access_token
							setToken(responseData.access_token)
							resolve()
						}
					}
						else {
						alert('Something went wrong!')
						reject()
					}
			}).catch(error => {
				reject(error)
			})
		})
	},

	// Logout
	LogOut() {
		return new Promise((resolve, reject) => {
			this.token = ""
			removeToken()
			resolve()
			// logoutByWeb().then((response) => {
			// 	this.token = ""
			// 	removeToken()
			// 	resolve(response)
			// }).catch(error => {
			// 	console.log(error)
			// 	reject(error)
			// })
			// .finally(() => {
			// })
		})
	},

	// Navbar loaded or refreshed : both cases fired
	pageLoadedORRefreshed() {
		// Get user info
		return new Promise((resolve) => {
			this.page_refreshing = true;
			// Get user info
			getUserInfo().then((response) => {
			this.user_info = response.data.data
				resolve(response);
			})
		});
	},
  },
});
