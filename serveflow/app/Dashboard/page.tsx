import "../Dashboard/style.css";
import Navbar from "../@Navbar/page";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="dashboard">
                <div className="hierarchy">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Overview</li>
                        <li>Analytics</li>
                        <li>Projects</li>
                        <li>Team</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className="workspace">
                    <h2>Workspace</h2>
                    <div className="workspace-content">
                        <div className="widget">Widget 1</div>
                        <div className="widget">Widget 2</div>
                        <div className="widget">Widget 3</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
