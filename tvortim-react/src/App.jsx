import React from "react"
import * as ReactDOMClient from "react-dom/client"

class App extends React.Component {
    render(){
        return(
                <div className="wrapper">
                    <section className="buttons">
                        <div className="container">
                            <div className="buttons-content">
                                <div className="row">
                                    <div className="col-4 m-auto">
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                name=""
                                                id="literature"
                                                className="btn btn-color"
                                            >
                                                Литература
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-4 m-auto">
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                name=""
                                                id="music"
                                                className="btn btn-color"
                                            >
                                                Музыка
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 m-auto">
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                name=""
                                                id="art"
                                                className="btn btn-color"
                                            >
                                                Изобразительное искусство
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-4 m-auto">
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                name=""
                                                id="handmade"
                                                className="btn btn-color"
                                            >
                                                Рукоделие
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        )
    }
}

export default App