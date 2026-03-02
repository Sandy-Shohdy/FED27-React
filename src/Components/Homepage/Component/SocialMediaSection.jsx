import {Layout} from "../Layout";

export const SocialMediaSection = ({firstComponent, secondComponent}) => {
    const showFirstComponentFirst = true;

    return (
        // this mobile layout
        <Layout>
            {firstComponent}
            {secondComponent}
        </Layout>

        // this desktop layout
        // <Layout>
        //     {secondComponent}
        //     {firstComponent}
        // </Layout>
    )
}