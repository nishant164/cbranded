<?php
 namespace MailPoetVendor\Doctrine\ORM\Query\Expr; if (!defined('ABSPATH')) exit; class Orx extends \MailPoetVendor\Doctrine\ORM\Query\Expr\Composite { protected $separator = ' OR '; protected $allowedClasses = [\MailPoetVendor\Doctrine\ORM\Query\Expr\Comparison::class, \MailPoetVendor\Doctrine\ORM\Query\Expr\Func::class, \MailPoetVendor\Doctrine\ORM\Query\Expr\Andx::class, self::class]; protected $parts = []; public function getParts() { return $this->parts; } } 