import React, { useState } from 'react';
import { Input, Button, Card, Layout, Modal, Row, Col } from 'antd';
import {
  UserAddOutlined,
  InfoCircleOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const Admindash = () => {
  const [teacherName, setTeacherName] = useState('');
  const [className, setClassName] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);
  const [teacherId, setTeacherId] = useState(''); 
  const [allocatedClass, setAllocatedClass] = useState('');
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isTeacherInfoModalOpen, setIsTeacherInfoModalOpen] = useState(false);
  const [isClassInfoModalOpen, setIsClassInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const showAddTeacherModal = () => {
    setIsAddTeacherModalOpen(true);
  };

  const showAddClassModal = () => {
    setIsAddClassModalOpen(true);
  };

  const showTeacherInfoModal = () => {
    setIsTeacherInfoModalOpen(true);
  };

  const showClassInfoModal = () => {
    setIsClassInfoModalOpen(true);
  };

  const showStatsModal = () => {
    setIsStatsModalOpen(true);
  };

  const handleOk = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleAddTeacher = () => {
    if (teacherName.trim() === '' || teacherId.trim() === '' || allocatedClass.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newTeacher = {
      name: teacherName,
      id: teacherId,
      allocatedClass: allocatedClass,
    };

    setTeachers([...teachers, newTeacher]);
    setTeacherName('');
    setTeacherId('');
    setAllocatedClass('');
    setIsAddTeacherModalOpen(false);
  };

  const handleAddClass = () => {
    if (className.trim() === '') {
      alert('Please enter a class name.');
      return;
    }

    setClasses([...classes, className]);
    setClassName('');
    setIsAddClassModalOpen(false);
  };

  // Placeholder functions for handling button clicks
  const handleTeacherInfo = () => {
    // Replace this with your logic to display teacher information
  };

  const handleClassInfo = () => {
    // Replace this with your logic to display class information
  };

  const handleStats = () => {
    // Replace this with your logic to display statistics
  };



  return (
    <Layout>
      <Header />
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]} style={{marginBottom: '16px'}}>
          <Col span={8}>
            <Card
              title="Add Teacher"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              hoverable
            >
              <UserAddOutlined style={{ fontSize: '60px' }} /><br></br>
              <Modal
                title="Add Teacher"
                visible={isAddTeacherModalOpen}
                onOk={handleAddTeacher}
                onCancel={handleCancel}
              >
                <Input
                  placeholder="Enter teacher name"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
                <Input
                  placeholder="Enter teacher ID"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  style={{ marginTop: '10px' }}
                />
                <Input
                  placeholder="Enter allocated class"
                  value={allocatedClass}
                  onChange={(e) => setAllocatedClass(e.target.value)}
                  style={{ marginTop: '10px' }}
                />
              </Modal>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={showAddTeacherModal}>
                Add
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Add Class"
              style={{
                background: '#b5e3e2 ',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              hoverable
            >
              <UserAddOutlined style={{ fontSize: '60px' }} /><br></br>
              <Modal
                title="Add Class"
                visible={isAddClassModalOpen}
                onOk={handleAddClass}
                onCancel={handleCancel}
              >
                <Input
                  placeholder="Enter class name"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </Modal>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={showAddClassModal}>
                Add
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Teacher Info"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleTeacherInfo}
              hoverable
            >
              <IdcardOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{marginBottom: '16px'}}>
          <Col span={8}>
            <Card
              title="Class Info"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleClassInfo}
              hoverable
            >
              <IdcardOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Stats"
              style={{
                background: '#b5e3e2 ',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleStats}
              hoverable
            >
              <InfoCircleOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
            </Card>
          </Col>
        </Row>

      </Content>

      {/* Modals */}
      {/* ... content for modals */}
    </Layout>
  );
};

export default Admindash;