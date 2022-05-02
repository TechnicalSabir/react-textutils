import TextForm from "./TextForm";

function Home(props) {
    return (

        <div className={`text-${props.darkMode === 'light' ? 'dark' : 'light' }`}>
            <h2 className="text-center my-4">Home Page</h2>
            <TextForm heading="Enter the text to analyze" darkMode={props.darkMode} />
        </div>
    )

}

export default Home;