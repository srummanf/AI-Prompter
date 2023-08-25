import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
    title: "Prompta",
    description: "Prompta is a simple, fast prompt generation app.",
}

const root = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Navbar></Navbar>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default root
