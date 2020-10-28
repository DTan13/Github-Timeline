import React, { useEffect } from 'react';
import { html } from "diff2html";


const CommitDiff = props => {
    // TODO Cleanup
    // KNOWNISSUE :- diff2html --> Rendering big Files!!!!
    useEffect(() => {
        document.getElementById('commit-diff').innerHTML = html(props.diff, { drawFileList: true, matching: 'lines', diffStyle: "word", outputFormat: 'line-by-line' });
    });

    return (
        <div id='commit-diff'></div>
    );
};

export default CommitDiff;