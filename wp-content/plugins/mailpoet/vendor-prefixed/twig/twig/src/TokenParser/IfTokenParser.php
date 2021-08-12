<?php
 namespace MailPoetVendor\Twig\TokenParser; if (!defined('ABSPATH')) exit; use MailPoetVendor\Twig\Error\SyntaxError; use MailPoetVendor\Twig\Node\IfNode; use MailPoetVendor\Twig\Node\Node; use MailPoetVendor\Twig\Token; final class IfTokenParser extends \MailPoetVendor\Twig\TokenParser\AbstractTokenParser { public function parse(\MailPoetVendor\Twig\Token $token) { $lineno = $token->getLine(); $expr = $this->parser->getExpressionParser()->parseExpression(); $stream = $this->parser->getStream(); $stream->expect( 3 ); $body = $this->parser->subparse([$this, 'decideIfFork']); $tests = [$expr, $body]; $else = null; $end = \false; while (!$end) { switch ($stream->next()->getValue()) { case 'else': $stream->expect( 3 ); $else = $this->parser->subparse([$this, 'decideIfEnd']); break; case 'elseif': $expr = $this->parser->getExpressionParser()->parseExpression(); $stream->expect( 3 ); $body = $this->parser->subparse([$this, 'decideIfFork']); $tests[] = $expr; $tests[] = $body; break; case 'endif': $end = \true; break; default: throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unexpected end of template. Twig was looking for the following tags "else", "elseif", or "endif" to close the "if" block started at line %d).', $lineno), $stream->getCurrent()->getLine(), $stream->getSourceContext()); } } $stream->expect( 3 ); return new \MailPoetVendor\Twig\Node\IfNode(new \MailPoetVendor\Twig\Node\Node($tests), $else, $lineno, $this->getTag()); } public function decideIfFork(\MailPoetVendor\Twig\Token $token) { return $token->test(['elseif', 'else', 'endif']); } public function decideIfEnd(\MailPoetVendor\Twig\Token $token) { return $token->test(['endif']); } public function getTag() { return 'if'; } } \class_alias('MailPoetVendor\\Twig\\TokenParser\\IfTokenParser', 'MailPoetVendor\\Twig_TokenParser_If'); 