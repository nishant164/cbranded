<?php
 namespace MailPoetVendor\Doctrine\ORM\Query\AST; if (!defined('ABSPATH')) exit; class IndexBy extends \MailPoetVendor\Doctrine\ORM\Query\AST\Node { public $singleValuedPathExpression = null; public $simpleStateFieldPathExpression = null; public function __construct(\MailPoetVendor\Doctrine\ORM\Query\AST\PathExpression $singleValuedPathExpression) { $this->singleValuedPathExpression = $this->simpleStateFieldPathExpression = $singleValuedPathExpression; } public function dispatch($sqlWalker) { return $sqlWalker->walkIndexBy($this); } } 