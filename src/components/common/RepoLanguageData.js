import React from 'react';

const RepoLanguageData = props => {
    const keys = Object.keys(props.languageData);
    let totalLines = 0;
    totalLines = (keys.map(key => props.languageData[key]));
    totalLines = totalLines.reduce((a, b) => a + b, 0);
    return (
        totalLines ? (<div className="repo-lang-data">
            <h3>Langauge Statistics</h3>
            <hr />
            <div className="repo-lang-statistics">
                {keys.map(key => {
                    return (<div key={key}>
                        {`${key} : ${((props.languageData[key] * 100) / totalLines).toFixed(2)}%`}
                    </div>);
                })}
            </div>
        </div >) : null
    );
};

export default RepoLanguageData;