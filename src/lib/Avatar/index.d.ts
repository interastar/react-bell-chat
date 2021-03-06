/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface AvatarProps {
    author: Author;
    containerStyle?: React.CSSProperties;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
