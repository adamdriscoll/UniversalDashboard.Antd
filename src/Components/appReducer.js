import { REMOVE_PAGE, ADD_PAGE, SET_LOADING, SET_SIDEBAR, SET_PAGE } from "./consts"
import React, { useReducer, useCallback, createContext, Suspense } from "react"

const initialState = {
	pages: [],
	selectedPageKey: "",
	selectedPageTitle: "",
	loading: true,
	framework: "Antd",
	theme: {
		defaultTheme: {},
		selectedTheme: {},
		colorModes: [],
		selectedColorMode: "",
	},
	sideMenu: {
		collapsed: true,
	},
}

export const DashboardContext = createContext()

const reducer = (state, action) => {
	if (action.type === ADD_PAGE) {
		return {
			...state,
			pages: [...state.pages, action.payload],
		}
	}

	if (action.type === REMOVE_PAGE) {
		const newPages = state.pages.map(page => page.name !== action.payload.name)
		return {
			...state,
			pages: [...newPages],
		}
	}

	if (action.type === SET_PAGE) {
		console.log('payload', action.payload)
		return {
			...state,
			selectedPageTitle: action.payload.selectedPageTitle,
			selectedPageKey: action.payload.selectedPageKey,
		}
	}

	if (action.type === SET_LOADING) {
		return {
			...state,
			loading: action.payload.loading,
		}
	}

	if (action.type === SET_SIDEBAR) {
		return {
			...state,
			sideMenu: { collapsed: action.payload.collapsed },
		}
	}

	return state
}

export const DashboardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addPage = useCallback(
		({ id, name, autoRefresh, refreshInterval, content = [], title }) => {
			dispatch({
				type: ADD_PAGE,
				payload: {
					id,
					name,
					dynamic: true,
					autoRefresh,
					refreshInterval: refreshInterval * 1000,
					content,
					title
				},
			})
		},
		[dispatch]
	)

	const setPage = useCallback(
		(pageKey, pageTitle) => {
			dispatch({
				type: SET_PAGE,
				payload: {
					selectedPageKey: pageKey,
					selectedPageTitle: pageTitle
				},
			})
		},
		[dispatch]
	)

	const removePage = useCallback(
		name => {
			dispatch({
				type: REMOVE_PAGE,
				payload: { name },
			})
		},
		[dispatch]
	)

	const setLoading = useCallback(
		loading => {
			dispatch({
				type: SET_LOADING,
				payload: { loading },
			})
		},
		[dispatch]
	)

	const setSidebar = useCallback(
		collapsed => {
			dispatch({
				type: SET_SIDEBAR,
				payload: { collapsed },
			})
		},
		[dispatch]
	)

	let value = { state, addPage, removePage, setLoading, setSidebar, setPage }

	return (
		<DashboardContext.Provider value={value}>
			<Suspense fallback="Loading...">{children}</Suspense>
		</DashboardContext.Provider>
	)
}

export function guid() {
	return "xxxxxxxx".replace(/[xy]/g, function (c) {
		// eslint-disable-next-line no-bitwise
		var r = (Math.random() * 16) | 0 // eslint-disable-next-line no-bitwise

		var v = c === "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}
