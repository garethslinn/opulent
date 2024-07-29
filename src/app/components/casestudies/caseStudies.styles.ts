import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.widths.max};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.padding};
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title || '2em'};
  margin-bottom: ${({ theme }) => theme.spacing.small || '0.5em'};
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle || '1.5em'};
  margin-bottom: ${({ theme }) => theme.spacing.small || '0.5em'};
  color: ${({ theme }) => theme.colors.textSecondary || '#666'};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  color: ${({ theme }) => theme.colors.text};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.margin} 0;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.small || '0.5em'};
  padding-left: ${({ theme }) => theme.spacing.large || '1.5em'};
  position: relative;
  color: ${({ theme }) => theme.colors.text};

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary || '#007bff'};
  }
`;

const InlineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.margin} 0;
`;

const InlineListItem = styled.li`
  margin-right: ${({ theme }) => theme.spacing.large || '1.5em'};
  color: ${({ theme }) => theme.colors.text};

  &:last-child {
    margin-right: 0;
  }

  &:before {
    content: '•';
    margin-right: ${({ theme }) => theme.spacing.small || '0.5em'};
    color: ${({ theme }) => theme.colors.primary || '#007bff'};
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
