import React from 'react';
import './style.scss';

const Index = () => {
    const linkedInData = [{
        img:'0.gif',
        url: 'https://www.linkedin.com/posts/iampartha_fun-remotework-wfh-activity-6679972192219918336-JecD',
        content:<p>
                    <strong>Have you heard the good news!</strong> <br />
                    Do you miss the #fun you had with your colleagues in office due to WFH situation.
                </p>,
        alt:'Parthasarathi_full_stack_developer_Trivia'
    },{
        img:'1.jpeg',
        url: "https://www.linkedin.com/posts/iampartha_wfh-covid19-slack-activity-6651437401598148608--9Ym",
        content:<p>
                    Looking to optimise productivity during your <strong>#WFH</strong> because of <strong>#covid19!</strong>!<br />
                    Here is our new Remote Work Tips slack bot!
                </p>,
        alt:'Parthasarathi_full_stack_developer_remote_work_tips'
    },{
        img:'2.jpeg',
        url: "https://www.linkedin.com/posts/iampartha_startups-bangalore-sde-activity-6610524325248360448-BAuA",
        content:<p>
                    I just completed 3 months at my first job.<br />
                    I had heard horror stories about work-life balance at <strong>#Startups</strong>.
                </p>,
        alt:'Parthasarathi_full_stack_developer_first_job'
    },{
        img:'3.jpeg',
        url: "https://www.linkedin.com/posts/iampartha_indiamlcc-machinelearning-gdgcbe-activity-6482602099669594112-PXgx",
        content:<p>
                    Google's Machine Learning Study jam...! <br />
                    Weekend well spent with MLCC facilitator MOHAMEDSIPLI M <br />
                    Done and Dusted 🎉
                </p>,
        alt:'Google_ML'
    }
];
    return (
        <div>
            <h5>News Feed</h5>
            {linkedInData.map((data)=><div className="content-container" onClick={()=>window.open(data.url)}>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={require(`./Images/${data.img}`)} alt={data.alt} className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        {data.content}
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Index;
