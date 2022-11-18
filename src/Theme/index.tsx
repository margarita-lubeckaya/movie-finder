import {ThemeProvider} from 'styled-components'
import * as React from 'react'
import {ReactNode, useEffect} from 'react'
import PropTypes from 'prop-types'
import ThemeCreator from './ThemeCreator'
import GlobalStyle from './GlobalStyle'

const ThemeWrapper = ({children, colorTheme}: {
    children: ReactNode
    colorTheme: string
}) => {
    const defaultTheme = new ThemeCreator({colorTheme})

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }

    useEffect(() => {
        appHeight()
        window.addEventListener('resize', appHeight)
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

ThemeWrapper.propTypes = {
        children: PropTypes.node.isRequired,
        colorTheme: PropTypes.oneOf(['light', 'dark', 'extra']),
}

ThemeWrapper.defaultProps =
    {
        colorTheme: 'dark',
    }

export default ThemeWrapper
