import * as React from 'react'
import {ReactNode} from "react";
import PropTypes from 'prop-types'
import Header from './Header'
import * as S from './styled'

const BaseLayout = ({children}: { children: ReactNode }) => {

    return (
        <S.Page>
            <Header/>
            <S.PageMain>
                {children}
            </S.PageMain>
            <S.PageFooter>

            </S.PageFooter>
        </S.Page>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BaseLayout
