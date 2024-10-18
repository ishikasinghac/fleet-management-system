import AuthTabs from "../components/auth/AuthTabs"

const page = () => {
    return (
        <>
            <div style={{ justifyItems: "center", flexDirection: "column", display: "flex", alignItems: "center", }}>
                <h1>
                    Welcome to Fleet Management System
                </h1>
                <div style={{ width: 500 }}>
                    <AuthTabs />
                </div>
            </div>
        </>
    )
}

export default page;