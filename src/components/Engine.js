function Engine() {
    return (
        <div className="Jovial">
            <EngineHeader />
            <EngineBody />
        </div>
    )

}

function EngineHeader() {
    return (
        <header className="App-header">
            <h1>
                Jovial Engine
            </h1>
        </header>
    )
}

function GodotLink() {
    return (
        <a className="link" href="https://godotengine.org/">Godot</a>
    )
}

function EngineAbout() {
    return (
        <div className="JovialSection">
            <h3>
                About
            </h3>
            <p className="JovialP">
                Jovial Engine is video game library designed to provide any level of abstraction you so choose. Jovial is highly inspired by <GodotLink />. However, I believe no engine should be tied to any one paradigm so you can create any other system you so choose specific to your games needs!
            </p>
            <p className="JovialP">
                Jovial Engine is written in c++ and I have no intention adding scripting support.
            </p>
        </div>
    )
}

function EngineRoadmap() {
    return (
        <div className="JovialSection">
            <h3>
                Roadmap
            </h3>

            <form>
                <label><input type="checkbox" disabled></input> Item 1</label><br />
                <label><input type="checkbox" disabled></input> Item 2</label><br />
                <label><input type="checkbox" disabled></input> Item 3</label><br />
                <label><input type="checkbox" disabled></input> Item 4</label><br />
            </form>

            <p className="JovialP">
                Currently, Jovial Engine only supports Linux. My plans for the next platforms are:
            </p>
            <ol>
                <li>Web</li>
                <li>Windows</li>
                <li>Macos</li>
            </ol>
        </div>
    )
}

function EngineGettingStarted() {
    return (
        <div className="JovialSection">
            <h3>
                Getting started
            </h3>
            <p className="JovialP">
                Jovial Engine is currently not publicly available as it is still in very early stages of development.
            </p>
        </div>
    )

}

function EngineBody() {
    return (
        <body className="JovialBody">
            <EngineAbout />
            <EngineGettingStarted />
            <footer>
                for a overview of recent changes visit <a href="#/engine/changelog" className="link">the changelog</a>
            </footer>

        </body >
    )
}


export default Engine;
