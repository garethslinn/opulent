import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #666;
`;

const Paragraph = styled.p`
  margin-bottom: 1em;
  color: #444;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;
  padding-left: 1.5em;
  position: relative;
  color: #444;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #007bff;
  }
`;

const InlineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`;

const InlineListItem = styled.li`
  margin-right: 1.5em;
  color: #444;

  &:last-child {
    margin-right: 0;
  }

  &:before {
    content: '•';
    margin-right: 0.5em;
    color: #007bff;
  }
`;

export {
    Container,
    Title,
    Subtitle,
    Paragraph,
    List,
    ListItem,
    InlineList,
    InlineListItem,
};
