import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Skilldb from '../skilldb/Skilldb';

const Skill = () => {
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        fetch('./skill.json')
            .then(res => res.json())
            .then(data => setSkill(data))
    }
        , [])
    return (
    
        <div>
            <h2 className='bg-success text-white p-3'>Learn it knowledge.Built your own bright carrier</h2>
              <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                       skill.map(skill => <Skilldb
                            skill={skill}
                        ></Skilldb>)
                    }
                </Row>
        </div>
    );
};

export default Skill;