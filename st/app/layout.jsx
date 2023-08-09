import '@styles/globals.css';
import Nav from '@components/nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Prompta",
    description: "Prompta is a simple, fast prompt generation app.",
}

const root = ({ children }) => {
    return (
        <html Lang="en">
            <body>

                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav></Nav>
                    {children} </main>
            </body>
        </html>
    )
}

export default root
