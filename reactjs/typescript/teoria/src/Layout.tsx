import React, { FC, useState } from 'react'

interface Props {
    title: string
    hideHeader?: boolean
    hideAside?: boolean
    hideFooter?: boolean
    handleClick?: () => void
}

const Layout: FC<Props> = ({title, hideHeader = false, hideAside = false, hideFooter = false, handleClick}) => {

    const [theme, setTheme] = useState<string>('light')

    return (
        <div>

            { !hideHeader &&
                <header>
                    Acá vamos a tener el logo y menú
                </header>
            }

            { !hideAside &&
                <aside>
                    Acá vamos a tener otros items de menú
                </aside>
            }

            <main>
                { title }

                <button onClick={handleClick}>
                    Agergar
                </button>

                <button onClick={() => setTheme(prevState => {
                    if(prevState === 'dark') { return 'light' } else { return 'dark' }
                })}>
                    Cambiar tema a { theme === 'light' ? 'dark' : 'light' }
                </button>
            </main>

            { !hideFooter &&
                <footer>
                    Acá tenemos el footer
                </footer>
            }
        </div>
    )

}

export { Layout }
