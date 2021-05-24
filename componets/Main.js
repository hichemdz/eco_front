import React from 'react'
import { Container } from '../layout'
import Styles from '../styles/Home.module.css'
export default function Main({ children }) {
    return (
        <main className={Styles.main + ' py-48'}>
            <Container>
                {children}

            </Container>
        </main>
    )
}
