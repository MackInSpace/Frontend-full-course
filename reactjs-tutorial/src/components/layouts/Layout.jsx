export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )
    
    const footer =(
        <footer>
            <small>Created By:</small>
            <a target="blank" href="https://www.linkedin.com/in/adam-mackey-611b13220/">
                <img alt="pfp" src="https://media.licdn.com/dms/image/v2/C5603AQGHwknAYchapw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631635420449?e=1750896000&v=beta&t=N_DUnufpW6VS9n4XHlEA3seo2s4VZgLS2hdy-ocVZnc"/>
                <p>@MackInSpace</p>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}