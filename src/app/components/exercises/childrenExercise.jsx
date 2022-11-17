import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) => {
    const countChildren = React.Children.count(children);

    if (!countChildren) {
        return <div>Нет элементов</div>;
    }

    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child, i) => {
                        if (child.type === Component) {
                            return React.cloneElement(child, {
                                num: i + 1
                            });
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};

ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
