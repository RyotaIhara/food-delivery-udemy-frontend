import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Nav, NavItem } from "reactstrap";

const Layout = (props) => {
    return (
        <div className="container">
            <Head>
                <title>フードデリバリーサービス</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
            </Head>
            <header>
                <Nav className="navbar navbar-dark bg-dark">
                    <NavItem>
                        <Link href="/">
                            <a className="navbar-brand">ホーム</a>
                        </Link>
                    </NavItem>
                </Nav>
            </header>
            <Container>{props.children}</Container>
        </div>
    );
}

export default Layout