
import React from 'react'
import "antd/dist/antd.css";
import { Collapse } from 'antd';

const { Panel } = Collapse;

function Faq() {
    return (
        <div className="section-bg ">
        <div className="container">
            <div className="section-faq">
                <h2 >F.A.Q</h2>
                <span className="ques">Frequently Asked Questions</span>
                <Collapse>
                    <Panel header="Techblog369" key="1">

                        <p>Greetings from Techblog369</p>

                    </Panel>
                    <Panel header="Computer Science" key="2">

                        <p>This is Best computer Science Portal</p>

                    </Panel>
                </Collapse>
            </div>
        </div>
        </div>
    )
}

export default Faq
