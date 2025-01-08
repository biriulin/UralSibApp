'use client';

import React from 'react';
import Link from 'next/link';

import {Ghost} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';

import {Wrapper} from './components/Wrapper';

interface AppProps {
    children: React.ReactNode;
}
export const App: React.FC<AppProps> = ({children}) => {
    return (
        <AsideHeader
            logo={{
                icon: Ghost,
                text: 'Ghost',
                wrapper(node) {
                    return <Link href={'/'}>{node}</Link>;
                },
            }}
            compact={true}
            hideCollapseButton={true}
            renderContent={() => <Wrapper>{children}</Wrapper>}
        />
    );
};
