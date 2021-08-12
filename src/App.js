import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFetch = async () => {
        try {
            const response = await fetch(url);
            const finalRes = await response.json();
            setData(finalRes);
            setLoading(false);
        } catch (err) {
            console.log("there is an error");
        }
    };
    useEffect(() => {
        handleFetch();
    }, []);

    if (loading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        );
    }

    const { company, dates, duties, title } = data[currentIndex];

    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <h2>experience</h2>
                </div>

                <div className="content-wrapper">
                    <div className="btn-container">
                        {data.map((value, index) => {
                            return (
                                <button
                                    key={value.id}
                                    className={`btn ${
                                        currentIndex === index && "active"
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {value.company}
                                </button>
                            );
                        })}
                    </div>

                    <div className="info-container">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p>{dates}</p>
                        {duties.map((value, index) => {
                            return (
                                <div className="job-des" key={index}>
                                    <FaAngleDoubleRight className="icn" />
                                    <p>{value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
