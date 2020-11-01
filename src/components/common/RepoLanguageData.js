import React from 'react';

const RepoLanguageData = props => {
    const keys = Object.keys(props.languageData);
    let totalLines = 0;
    totalLines = (keys.map(key => props.languageData[key]));
    totalLines = totalLines.reduce((a, b) => a + b, 0);
    return (
        (<div className="repo-lang-data">
            <h3>Langauge Statistics</h3>
            <hr />
            {totalLines ? <div className="repo-lang-statistics">
                {keys.map(key => {
                    return (<div key={key}>
                        {`${key} : ${((props.languageData[key] * 100) / totalLines).toFixed(2)}%`}
                    </div>);
                })}
            </div> : [<br />, <h4>Nothing to show here!</h4  >]}
        </div >)
    );
};

export default RepoLanguageData;