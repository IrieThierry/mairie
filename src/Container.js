import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import PageHeader from "./PageHeader";
import SidebarMenu from "./SidebarMenu";
import Dashboard from "./Dashboard";
import ListeMotos from "./ListeMotos";
import Parametres from "./Parametre";

const Container = () => {
  const { Content, Footer } = Layout;

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <PageHeader />
        <Layout>
          <SidebarMenu />
          <Content style={{ margin: "0 10px" }}>
            <section style={{ padding: 24, minHeight: 360 }}>
              {/* {props.children} */}
              <div className="mb-2 p-2" style={{ backgroundColor: "white", borderRadius:'6px' }}>
              <Dashboard />
              </div>
              <div style={{ backgroundColor: "white" }}>
                <ListeMotos />
              </div>
              {/* <Parametres/> */}
            </section>
          </Content>
        </Layout>

        <Footer style={{ textAlign: "center" }}>
          Enregistrement Mairie © {new Date().getFullYear()} Design by
        </Footer>
      </Layout>
    </div>
  );
};

export default Container;
