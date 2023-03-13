import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { LoginForm } from "@/components/login/login";
import React from "react";
import { createTestClient } from "@/src/utils/apolloClientTests";
import { ApolloProvider } from "@apollo/client";

jest.mock("next/navigation", () => {
    return { useRouter: jest.fn() };
});

jest.mock("notistack", () => {
    return {
        useSnackbar: () => ({
            enqueueSnackbar: jest.fn(),
        }),
    };
});

describe("login tests", () => {
    test("login matches snapshot", async () => {
        const client = createTestClient();
        const loginForm = render(
            <ApolloProvider client={client}>
                <LoginForm />
            </ApolloProvider>,
        );

        expect(loginForm).toMatchSnapshot();
    });

    test("login button is disabled", async () => {
        const client = createTestClient();
        const loginForm = render(
            <ApolloProvider client={client}>
                <LoginForm />
            </ApolloProvider>,
        );

        const button = loginForm.getByTestId("loginButton");
        const password = loginForm.getByTestId("passwordField").querySelector("input");
        const username = loginForm.getByTestId("usernameField").querySelector("input");

        expect(password).toBeInTheDocument();
        expect(username).toBeInTheDocument();

        expect(button).toBeDisabled();
        if (!password || !username) return;
        fireEvent.change(username, { target: { value: "test" } });
        expect(button).toBeDisabled();
        fireEvent.change(password, { target: { value: "test" } });
        expect(button).not.toBeDisabled();
    });
});
